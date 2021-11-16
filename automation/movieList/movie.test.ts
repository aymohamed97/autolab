import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit() 
})

test("I can add a movie", async () => {
    let addMovie = await (await driver).findElement(By.xpath("//form/input"))

    await addMovie.sendKeys('The Lion King\n')
    await driver.sleep(2000)
}) 

test("I can delete a movie", async () => {
    let deleteMovie = await (await driver).findElement(By.xpath("//form/input"))

    await deleteMovie.sendKeys('The Lion King\n')
    await driver.sleep(2000)
}) 
