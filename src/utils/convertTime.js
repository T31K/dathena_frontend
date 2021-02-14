import Moment from 'moment'

export const convertTime = (value) => {
    return Moment(value).format('YYYY-MM-DD')
}