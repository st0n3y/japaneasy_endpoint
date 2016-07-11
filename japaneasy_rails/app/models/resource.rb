class Resource
  include Mongoid::Document
  field :medium, type: String
  field :title, type: String
  field :description, type: String
  field :image, type: BSON::Binary
end