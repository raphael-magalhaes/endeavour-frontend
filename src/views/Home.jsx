import React from 'react';
import Paper from '../components/PaperSheet'
import Typography from 'material-ui/Typography';
import FormatQuote from 'material-ui-icons/FormatQuote'

const Home = props => (
    <Paper>
        <Typography style={{ marginRight: "2em", }} type="body1">
            <Typography type="caption" gutterBottom>
                <FormatQuote />
            </Typography>
            {`Some people say, How can you live without knowing?
                 I do not know what they mean. I always live without knowing.
                 That is easy. How you get to know is what I want to know. ― Richard Feynman`}
        </Typography>
    </Paper>
)

export default Home