import {connect} from 'react-redux'

import {asyncGetUsers} from './actions'

import {useEffect} from 'react'

const Home = ({users,setUsers}) => {

    useEffect(() => {
        setUsers()
    }, [setUsers])

    return (
      <>
        <div>Welcome Home</div>
        <div>
        {
            users.map((user,index) => {
                return (
                    <div key={index}>{user.email}</div>
                )
            })
        }
        </div>
      </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: () => {dispatch(asyncGetUsers())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)