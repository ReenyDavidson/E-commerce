import React, { Component } from 'react';
import { Range } from 'react-range'

class PriceRange extends Component {
    render() {
       
        return (
            <>

<Range
        
        min={0}
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
              backgroundColor: 'blue'
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
              height: '32px',
              width: '42px',
              backgroundColor: '#ccc'
            }}
          />
        )}
      />
                
            </>
        );
    }
}

export default PriceRange;



