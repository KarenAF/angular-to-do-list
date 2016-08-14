class PagesController < ApplicationController
  def index
    render 'index.html.erb'
  end

  def welcome
    render 'welcome.html.erb'
  end
end
