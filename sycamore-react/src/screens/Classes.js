import React, {Component} from 'react';
import PropTypes from "prop-types";

import {
	Box, 
	Button,
	Heading,
	InfiniteScroll,
    Tabs, 
    Text,
	Tab
} from 'grommet';

const majorClasses = Array(50)
  .fill()
  .map((_, i) => {
	  var id = Math.floor(Math.random() * (700 - 100 + 1) ) + 100
	  return `MAJR ${id}`;
	});

const minorClasses = Array(2)
  .fill()
  .map((_, i) => {
	var id = Math.floor(Math.random() * (700 - 100 + 1) ) + 100
	return `MINR ${id}`;
  });

const Course = props => (
	<Box
		flex
		direction='column'
		align='center'
		justify='center'
	>
		<Button 
			fill
			onClick={() => {props.clickFunc(props.id)}}
			label={<strong>{props.name}</strong>}
            hoverIndicator
			style={{
                background: 'white',
				padding: '30% 100% 30% 100%',
				radius: '4px',
				border: '3px solid main',
				fontSize: '30px'
			}}
		>
		</Button>
	</Box>
);

const CourseBox = props => (
	<InfiniteScroll items={props.list} step={20}>
	  {item => (
		<Box
		  align="center"
		  pad='small'
		  key={item}
		>
		  <Course clickFunc = {props.clickFunc} name={item} id={item}></Course>
		</Box>
	  )}
	</InfiniteScroll>
);

const RichTabTitle = ({label}) => (
    <Box direction="row" align="center" gap="xsmall" margin="xsmall">
      <Text size="large">
        <strong>{label}</strong>
      </Text>
    </Box>
);
  
RichTabTitle.propTypes = {
	label: PropTypes.string.isRequired
};
  
  
class Classes extends Component {
	state = {
		courseTab: 0
	}
	render () {
		const {courseTab} = this.state;
		return (
			<Tabs
				activeIndex={courseTab}
				onActive={i => {
					this.setState({ courseTab: i });
				}}
			>
                <Tab 
                    title={
                        <RichTabTitle
                      		label="Major"
                        />
                    }
                >
					<CourseBox clickFunc = {this.props.clickFunc} list={majorClasses} />
				</Tab>
                <Tab 
                    title={
                        <RichTabTitle
                            label="Minor"
                        />
                    }
                >
					<CourseBox clickFunc = {this.props.clickFunc} list={minorClasses} />
				</Tab>
				<Tab
					title={
						<RichTabTitle
							label="Search"
						/>
					}
				>
					<Box
						direction='column'
						align='center'
						justify='start'
						pad='small'
						animation={{
							type: 'fadeIn',
							size: 'xlarge'
						}}
					>
						<Heading level='2'>search bar</Heading>
					</Box>
				</Tab>
			</Tabs>
		);
	}
}

export default Classes;