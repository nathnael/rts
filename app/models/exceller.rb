class Exceller < ApplicationRecord

    enum status_id: [:applied, :shortlisted, :first_interview, :rejected_at_first_interview, :second_interview, :rejected_at_second_interview, :job_offered, :rejected_offer, :accepted_offer, :signed_contract, :active, :annual_leave, :sick_leave, :resigned, :fired, :bootcamp_offered, :rejected_bootcamp, :bootcamp_enrolled, :bootcamp_failed, :bootcamp_graduated]
    
    def name
        first_name.to_s + ' ' + father_name.to_s + ' ' + grandfather_name.to_s
    end
end
