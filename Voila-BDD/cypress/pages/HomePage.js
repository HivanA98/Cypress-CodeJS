import BasePage from './BasePage'

class HomePage extends BasePage {
  visit() {
    return this.open('/')
  }

  get mainBanner() {
    return this.byTestId('CT_Component_Carousel_default')
  }
}

export default new HomePage()
