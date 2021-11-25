import { observer } from 'mobx-react';
import styled from '@emotion/styled';

import store from '../src/store';

// We need to keep the style outside of the component, otherwise it does not work properly
const Input = styled.input`
        width: 100%;
        padding: 0.2rem;
        font-size: large;
`;
const PhotoFilter = () => {
    return (
        <Input
        type="text"
        value={store.filter}
        onChange={(e) => store.setFilter(e.target.value)}
        />
    );
}

export default observer(PhotoFilter);