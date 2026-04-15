import "@testing-library/jest-dom"
import { fireEvent, render, waitFor } from "@testing-library/react"
import Body from "../Body";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { SwiggyApiData } from "../../mocks/SwiggyApiData";



// fetch is not understand by Jest , so we have to mock the fetch behaviour

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(SwiggyApiData);
        }
    })
})
test("Shimmer should load on homepage", () => {
   const body =  render(
    <StaticRouter>
        <Provider store={AppStore}>
                <Body/>
        </Provider>
    </StaticRouter>
   )

   const shimmer = body.getByTestId("shimmer-card")

   // expect(shimmer).toBeInTheDocument();  not a good approach as it will pass even if shimmer is empty div.
   expect(shimmer.children.length).toBe(10)
//    console.log(shimmer);
})


test("Restaurants should load on homepage", async () => {
   const body =  render(
    <StaticRouter>
        <Provider store={AppStore}>
                <Body/>
        </Provider>
    </StaticRouter>
   )

   await waitFor(() => expect(body.getByTestId("search-input")))
   const reslist = body.getByTestId("restaurant-list") 
   expect(reslist.children.length).toBe(8)
//    console.log(reslist);
})

test("Restaurants list (search) should load on homepage", async () => {
   const body =  render(
    <StaticRouter>
        <Provider store={AppStore}>
                <Body/>
        </Provider>
    </StaticRouter>
   )

   await waitFor(() => expect(body.getByTestId("search-input"))) // wait for search input to load
   const searchInput = body.getByTestId("search-input") // get search input

   fireEvent.change(
    searchInput,
       {
        target : {
            value : "burger"
        },
       }
   )

   const searchBtn = body.getByTestId("search-btn")
   fireEvent.click(searchBtn)

   const reslist = body.getByTestId("restaurant-list") 
   expect(reslist.children.length).toBe(1)
   
})
