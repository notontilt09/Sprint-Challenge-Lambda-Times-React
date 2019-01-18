import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
`;

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <TabTab
      className={`${props.tab === props.selectedTab && 'active-tab'}`}
      onClick={() => 
          props.selectTabHandler(props.tab)
        }
    >
      {props.tab.toUpperCase()}
    </TabTab>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab;
