import React, { Component } from 'react';
import { Range } from 'react-range'

class PriceRange extends Component {
    render() {
       
        return (
            <>

<Range
        
        min={1000}
        max={10000}
        values={this.props.values}
        onChange={this.props.priceChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: 'pink'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '15px',
              width: '22px',
              backgroundColor: 'black'
            }}
          />
        )}
      />
                
            </>
        );
    }
}

export default PriceRange;



