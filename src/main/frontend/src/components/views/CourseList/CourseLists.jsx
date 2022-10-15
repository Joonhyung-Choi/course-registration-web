import React from 'react';

const CourseLists = ({ courseLists }) => {
    return (
        <div>
            {courseLists.map(courseList => {
                return (<div key={courseList.id}>
                    {courseList.department}
                </div>)
            })}
        </div>
    );
};

export default CourseLists;