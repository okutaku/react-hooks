import React from 'react';
import { UserContext, LanguageContext } from '../App'

function ComponentF(){
  return (
      <div>
        <UserContext.Consumer>
          {
            user => {
              return(
                <LanguageContext.Consumer>
                  {
                    language => {
                      return <div>{user.name}: {language}</div>
                    }
                  }
                </LanguageContext.Consumer>
              )
            }
          }
        </UserContext.Consumer>
      </div>
  )
}

export default ComponentF