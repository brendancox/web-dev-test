class Holiday

	def initialize(holiday)
		@holiday = holiday
	end

	def calculate_days
		(Date.parse(@holiday[:return_date]) - Date.parse(@holiday[:leave_date])).to_i
	end

	def total_cost
		calculate_days * @holiday[:accom_cost].to_i + @holiday[:leave_cost].to_i + @holiday[:return_cost].to_i
	end
end