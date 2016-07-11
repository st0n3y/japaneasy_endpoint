json.array!(@resources) do |resource|
  json.extract! resource, :id, :medium, :title, :description, :image
  json.url resource_url(resource, format: :json)
end
