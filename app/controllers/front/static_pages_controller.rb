class Front::StaticPagesController < FrontController
  def support
  end

  def help
  end

  def confidential
    @email = "info@geula-center.ru"
    @url = "http://geula-center.ru"
  end

  def success
  end

end
