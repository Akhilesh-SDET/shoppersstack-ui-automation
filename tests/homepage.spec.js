import {test,expect} from "@playwright/test"
import HomePage from "../pages/HomePage"

test("should load shoppersStack homepage", async({page})=>{
    
 const homePage = new HomePage(page);
 await homePage.goto();
 const title = await homePage.getTitle()
 expect(title).toBe('ShoppersStack');

})