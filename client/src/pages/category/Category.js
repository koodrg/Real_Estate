import { Link } from "react-router-dom";
import "./category.css";
import { Publish } from "@material-ui/icons";

export default function Category() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">

          <div className="productTopRight">
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue"></span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Tên danh mục:</span>
                      <span className="productInfoValue">Chung cư bán</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Loại danh mục:</span>
                      <span className="productInfoValue">apartment_for_sale</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Tên danh mục</label>
                  <input type="text" placeholder="" />
                  <label>Loại danh mục</label>
                  <input type="text" placeholder="" />
                  <button className="productButton">Update</button>
              </div>
              
          </form>
      </div>
    </div>
  );
}