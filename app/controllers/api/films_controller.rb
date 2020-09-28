class Api::FilmsController < ApplicationController
    
    def index
        @films = Film.all
        render "api/films/index"
    end

    def show
        @film = Film.find(params[:id])
        render "api/films/show"
    end

end