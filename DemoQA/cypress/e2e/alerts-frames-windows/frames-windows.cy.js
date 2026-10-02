import { framesPage, browserWindowsPage } from '../../pages'

describe('Frames', () => {
  beforeEach(() => {
    framesPage.visit()
  })

  ;['frame1', 'frame2'].forEach((frameId) => {
    it(`reads the heading inside ${frameId}`, () => {
      framesPage.frameHeading(frameId).should('have.text', 'This is a sample page')
    })
  })
})

describe('Browser Windows', () => {
  beforeEach(() => {
    browserWindowsPage.visit().stubWindowOpen()
  })

  it('opens /sample in a new tab', () => {
    browserWindowsPage.newTabButton.click()
    cy.get('@windowOpen').should('have.been.calledWithMatch', '/sample')
  })

  it('opens /sample in a new window', () => {
    browserWindowsPage.newWindowButton.click()
    cy.get('@windowOpen').should('have.been.calledWithMatch', '/sample')
  })

  it('the sample page shows the expected heading', () => {
    cy.visit('/sample')
    cy.get('#sampleHeading').should('have.text', 'This is a sample page')
  })
})
