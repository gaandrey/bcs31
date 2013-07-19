class Review < ActiveRecord::Base
  attr_accessible :city, :company_name, :content, :first_name, :last_name, :logo, :moderated

  validates :first_name, :content, presence: true
end
