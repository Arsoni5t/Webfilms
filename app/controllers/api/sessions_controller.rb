class Api::SessionsController < ApplicationController

    def create
       
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
            email = params[:user][:email]
            password = params[:user][:password]
        if @user
            login(@user)
            render "api/users/show"
        elsif email == "" && password == ""
            render json: ["Please enter an email.", "Your password must contain between 4 and 60 characters."], status: 401
        elsif password == ""
            render json: ["Please enter a password"], status: 401
        elsif email == ""
            render json: ["Please enter an email."], status: 401
        else
            render json: ["Sorry, we can't find an account with this email address."], status: 401
        end
    end

    def destroy
        @user = current_user

        if @user
            logout
            render "api/users/show"
        else
            render json: ["Sessions Errors Controller - destroy"], status: 404
        end

    end

end
