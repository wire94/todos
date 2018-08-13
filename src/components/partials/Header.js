import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class Header extends Component {
    render() {
        return (
            <Grid id="todos-header-container" textAlign="center" container>
                <Grid.Row>
                    <Grid.Column>
                        <h3 className="todos-font-xl">todos</h3>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Header;
