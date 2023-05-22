import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
  render() {
    const {sanPham,themGioHang} = this.props;
    return (
      <div className="card text-dark">
        <img className="card-img-top" src={sanPham.image} alt={sanPham.image} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.name}</h4>
          <button className="btn btn-danger" onClick={() => themGioHang(sanPham)}>Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}
