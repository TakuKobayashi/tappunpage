module ApplicationHelper
  def assets_path(path)
    return "http://localhost:8080/assets/#{path}" if Rails.env.development?
    host = Rails.application.config.action_controller.asset_host
    manifest = Rails.application.config.assets_manifest
    path = manifest[path] if manifest && manifest[path].present?
    return "#{host}/assets/#{path}"
  end
end
