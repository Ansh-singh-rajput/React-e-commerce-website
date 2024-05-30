import { Helmet } from "react-helmet"

function MetaData(title) {
  return (
    <Helmet>
      <title>{`${title}-MyShop`}</title>
      {/* <title>{title}</title> */}
    </Helmet>
  )
}

export default MetaData