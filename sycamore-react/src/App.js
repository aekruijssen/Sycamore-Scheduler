import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {
	Box,
	Grommet
} from 'grommet';
import {css} from 'styled-components';

import Main from './screens/Main';
import Landing from './screens/Landing';

const theme = {
	global: {
		colors: {
			main: '#ff3300'
		},
		font: {
			family: 'Source Sans Pro',
			size: '14px',
			height: '20px',
			color: '#ffffff'
		},
		hover: {
			color: 'black',
			background: 'inherit'
		}
	},
	button: {
		border: {
			color: 'main'
		}
	},
	anchor: {
		color: '#ff3300',
		hover: {
			textDecoration: 'none'
		}
	},
	box: {
		extend: {
			whiteSpace: 'nowrap',
		}
	},
	tabs: {
		background: "light-2",
		header: {
		  background: "light-2",
		  extend: ({ theme }) => css`
			flex: 0 0;
			padding-top: ${theme.global.edgeSize.medium};
			padding-bottom: ${theme.global.edgeSize.medium};
			box-shadow: 0;
		  `
		},
        gap: "medium",
		extend: `
		div[role='tabpanel'] {
			overflow-y: auto;
			overflow-x: hidden;
			padding-bottom: 10%;
		}
        `
	},
	tab: {
		active: {
		  background: 'main',
		  color: 'white',
		},
		color: 'main',
		background: "white",
		hover: {
		  background: "pink",
		  border: {
			side: 'all',
			color: 'main',
			size: 'small'
		  },
		  color: 'white'
		},
		border: undefined,
		margin: undefined,
		pad: {
		  bottom: undefined,
		  horizontal: "xsmall"
		},
		extend: ({ theme }) => css`
			border-radius: ${theme.global.control.border.radius};
		`
	  },
};

const Content = () => (
	<Box fill>
		<Route exact path='/' component={Landing} />
		<Route path='/Main' component={Main} />
	</Box>
);


export default () => (
	<Router basename="/sycamore-scheduler">
		<Grommet theme={theme} full>
			<Fragment>
			<Content />
			</Fragment>
		</Grommet>
	</Router>
)