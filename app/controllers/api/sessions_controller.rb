class Api::SessionsController < ApplicationController 

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.save 
            login(@user)
            render "api/users/show"
        else  
            render json: ["invalid username or password"], status: 422
        end 
    end 

    def destroy 
        @user = current_user 
        if @user 
            logout 
            render "api/users/show"
        else   
            render json: ["No user logged in"], status: 404
        end 
    end 
end 