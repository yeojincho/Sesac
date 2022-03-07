import React from "react";

export default function HrItem({ src, item, price }) {
  return (
    <li>
      <a href="#">
        <img src={src} alt={item} />
        <dl className="itemDesc">
          <dt className="item">{item}</dt>
          <dd className="price">{price}원</dd>
        </dl>
      </a>
    </li>
  );
}
