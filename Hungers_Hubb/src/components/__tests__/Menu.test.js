import "@testing-library/jest-dom"
import { fireEvent, render, waitFor } from "@testing-library/react"
import Body from "../Body";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { Menudata } from "../../mocks/SwiggyApiData";
import RestuarantMenu from "../RestaurantMenu";
import Header from "../Header";



// fetch is not understand by Jest , so we have to mock the fetch behaviour

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Menudata);
        }
    })
})

test("ADD Items to the Cart ", async () => {
   const body =  render(
    <StaticRouter>
        <Provider store={AppStore}>
            <Header/>
            <RestuarantMenu/>
        </Provider>
    </StaticRouter>
   )

   await waitFor(() => expect(body.getAllByTestId("menu-items"))) // wait for search input to load
   const addbutton = body.getAllByTestId("add-button") // get search input

    fireEvent.click(addbutton[0]) // click on search button
    

    const cartcount = body.getByTestId("cart-count");
    
    expect(cartcount.textContent).toContain("Cart - 1 items");
   
})
