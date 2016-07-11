class User
  
  include Mongoid::Document
  include Mongoid::Timestamps
  field :medium, type: String
  field :title, type: String
  field :description, type: String
  field :image, type: BinData
 
end