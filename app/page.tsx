//layout
import Layout from 'app/layout';

//import Link
import Link from 'next/link';

//import axios
import axios from "axios";

//fetch with "getServerSideProps"
export async function getServerSideProps() {

    //http request
    const req  = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/page`)
    const res  = await req.data.data.data

    return {
      props: {
          posts: res // <-- assign response
      },
    }
  }

function PostIndex(props: { posts: any; }) {

    //destruct
    const { posts } = props;

    return(
        <Layout>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0 shadow-sm rounded-3">
                            <div className="card-body">
                                <Link href="/posts/create">
                                    <button className="btn btn-primary border-0 shadow-sm mb-3">TAMBAH</button>
                                </Link>
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">NAME</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">GENDER</th>
                                            <th scope="col">STATUS</th>
                                            <th scope="col">ACTION</th>
                                        </tr>
                                    </thead>
                                </table>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostIndex