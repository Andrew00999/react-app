import React from 'react';
import Input from './UI/input/Input';
import MySelect from './UI/Select/MySelect';


const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={event => setFilter({ ...filter, query: event.target.value })}
                placeholder="Поиск постов..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
            />
        </div>
    )
}

export default PostFilter;