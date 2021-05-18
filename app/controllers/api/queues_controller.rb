class Api::QueuesController < ApplicationController
# skip_before_action :verify_authenticity_token
before_action :ensure_signed_in, only: [:index, :create, :destroy]
    # def index
    #     @queues = Queue.where(user_id: current_user.id)
    #     render :index
    # end

    # def show
    #     @queue = Queue.find(params[:id])
    #     render :show
    # end

    # def create
    #     @queue = Queue.new(queue_params)
    #     @queue.user_id = current_user.id
    #     if @queue.save
    #       render :create
    #     else
    #       render @queue.errors.full_messages, status: 404
    #     end
    # end

    # def destroy
    #    @queue = Queue.find_by(id: params[:id])
    #    if @queue.destroy
    #         render :show
    #    else
    #         render @queue.errors.full_messages, status: 404
    #    end
    # end
    def index
        @queues = current_user.queues
       if @queues
            render :index
       else
        render json: ["No queue created"], status: 422
       end
    end

    def create 
        @queue = Queue.new(queue_params)
        if @queue.save
            render :show
        else
            render json: @queue.errors.full_messages, status: 422
        end
    end

    def show 
        @queue = Queue.find(params[:id])
        if @queue 
            render :show
       else
            render json: ["No queue created"], status: 422
       end
    end

    def destroy
        @queue = Queue.find_by(film_id: queue_params[:film_id], user_id: queue_params[:user_id])
        if Queue.destroy(@queue.id)
            render :show, status: 200
        else
            render json: @queue.errors.full_messages, status: 422
        end
    end
         
    private
    def queue_params
        params.require(:queue).permit(:film_id, :user_id )
    end
end