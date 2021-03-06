require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Temp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    # Get applicaiton version from git tag
    if Rails.env.development?
      tag = `git describe --tags --always`
      commit = `git rev-list -n 1 #{tag}`
      updated = `git show -s --format=%cd --date=local #{commit}`
      File.open('config/VERSION', 'w') do |file|
        file.write tag
      file.write " | Last updated on #{updated}"
      end      
    end

    config.version = File.read('config/VERSION')
  end
end
