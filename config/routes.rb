Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope module: :front do
    root 'static_pages#support'
    get 'help', to: 'static_pages#help'
    get 'confidential', to: 'static_pages#confidential'
    get 'success', to: 'static_pages#success'
  end
  
end
