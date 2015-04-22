class PagesController < ApplicationController

	def home
	end

	def forms
		holiday = Holiday.new(params[:form])
		respond_to do |format|
			format.json { render json: holiday.total_cost.to_json }
		end
	end
end