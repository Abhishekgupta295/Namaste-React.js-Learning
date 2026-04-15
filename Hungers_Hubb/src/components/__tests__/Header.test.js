import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { StaticRouter } from "react-router-dom";

test("logo should load on rendering header", () => { 

    const header = render(
    <StaticRouter>
        <Provider store={AppStore}>
            <Header/> 
        </Provider>
    </StaticRouter>
    );
    
    const logo = header.getAllByTestId('logo');
    console.log(logo[0]);
    expect(logo[0].src).toBe("http://localhost/dummy.png");
   
    
});

test("online status should be green on rendering header", () => { 

    const header = render(
    <StaticRouter>
        <Provider store={AppStore}>
            <Header/> 
        </Provider>
    </StaticRouter>
    );
    
    const onlinestatus = header.getByTestId('online-status');
    console.log(onlinestatus);
    expect(onlinestatus.innerHTML).toBe("🟢 Online");
   
    
});

test("Cart count should be 0 on rendering header", () => { 

    const header = render(
    <StaticRouter>
        <Provider store={AppStore}>
            <Header/> 
        </Provider>
    </StaticRouter>
    );
    
    const cartcount = header.getByTestId("cart-count");
    
    expect(cartcount.textContent).toContain("0");
    
});
