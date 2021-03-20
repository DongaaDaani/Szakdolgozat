
import React, {Component} from 'react';
import MindNode from './node.component' 
import { Navigation } from "./Navigation";

export class Home extends Component{
    render(){
        return(
              <div>
                  <Navigation/>
                      <h4 class="mt-3 d-flex justify-content-center">Üzleti folyamatok menedzselése</h4>
                   <MindNode/>
              </div>
        )
    }
}