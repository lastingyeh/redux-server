### server render html to client

#### -server 

1.receive req.query

2.generate counter from api ('../common/api/counter')

3.initialState 

4.renderToString for client components

5.get final-state

6.create new page && create object : window.__PRELOADED_STATE__

7.send res for new-page && final-state

#### -client 

    -Provicer 
        {-configureStore} 
            
            {-rootReducer}
                
                {-counterReducers}
                    
                    {-actionTypes}
                        
                        {-INCREMENT_COUNT}
                    
                        {-DECREMENT_COUNT}
            
            {-preloadedState}
            
            {-applyMiddleware}
                                                  
        -CounterContainer
        
            {-Counter}
            
                {-statToProps count}
                
                {-dispatchToProps onIncrement && onDecrement}

                        {-conterActions}
                        
                            {-createAction(INCREMENT_COUNT)}
                            
                            {-createAction(DECREMENT_COUNT)}
                            
![alt tag]                            
                                                  
#### refs by https://github.com/kdchang/reactjs101/tree/master/Ch10/react-redux-server-rendering        
