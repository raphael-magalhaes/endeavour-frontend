import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ExploreIcon from 'material-ui-icons/Explore'
import ExtensionIcon from 'material-ui-icons/Extension'
import LightbulbOutlineIcon from 'material-ui-icons/LightbulbOutline'
import HelpIcon from 'material-ui-icons/Help'
import { Link } from 'react-router-dom'

export const mainContent = (
	<div>
		<Link className="no-link-style" to="/">
			<ListItem button>
				<ListItemIcon>
					<ExploreIcon />
				</ListItemIcon>
				<ListItemText
					style={{ textWeight: '100' }}
					primary="The Endeavour"
				/>
			</ListItem>
		</Link>
		<Link className="no-link-style" to="/technologies">
			<ListItem button>
				<ListItemIcon>
					<ExtensionIcon />
				</ListItemIcon>
				<ListItemText primary="Technologies" />
			</ListItem>
		</Link>
		<Link className="no-link-style" to="/contribute">
			<ListItem button>
				<ListItemIcon>
					<LightbulbOutlineIcon />
				</ListItemIcon>
				<ListItemText primary="Contribute" />
			</ListItem>
		</Link>
		<Link className="no-link-style" to="/about">
			<ListItem button>
				<ListItemIcon>
					<HelpIcon />
				</ListItemIcon>
				<ListItemText primary="About" />
			</ListItem>
		</Link>
	</div>
)
