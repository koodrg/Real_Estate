import React, { useState } from 'react';
import Select from 'react-select';
import './ViewAllFilter.css'

const options1 = [
    { value: 'nhà', label: 'Nhà' },
    { value: 'căn hộ', label: 'Căn hộ' },
  ];
  const options = [
    { value: 'quận 1', label: 'Quận 1' },
    { value: 'quận 2', label: 'Quận 2' },
    { value: 'quận 3', label: 'Quận 3' },
    { value: 'quận 4', label: 'Quận 4' },
    { value: 'quận 5', label: 'Quận 5' },
    { value: 'quận 6', label: 'Quận 6' },
    { value: 'quận 7', label: 'Quận 7' },
    { value: 'quận 8', label: 'Quận 8' },
    { value: 'quận 9', label: 'Quận 9' },
    { value: 'quận 10', label: 'Quận 10' },
    { value: 'quận 11', label: 'Quận 11' },
    { value: 'quận 12', label: 'Quận 12' },
    { value: 'quận thủ đức', label: 'Quận Thủ Đức' },
    { value: 'quận bình thạnh', label: 'Quận Bình Thạnh' },
    { value: 'quận gò vấp', label: 'Quận Gò Vấp' },
    { value: 'quận phú nhuận', label: 'Quận Phú Nhuận' },
    { value: 'quận tân phú', label: 'Quận Tân Phú' },
    { value: 'quận bình tân', label: 'Quận Bình Tân' },
    { value: 'quận tân bình', label: 'Quận Tân Bình' },
    { value: 'huyện nhà bè', label: 'Huyện Nhà Bè' },
    { value: 'huyện bình chánh', label: 'Huyện Bình Chánh' },
    { value: 'huyện hóc môn', label: 'Huyện Hóc Môn' },
    { value: 'huyện cần giờ', label: 'Huyện Cần Giờ' },
    { value: 'huyện củ chi', label: 'Huyện Củ Chi' },
  ];
  
  const options2 = [
    { value:['1000000000','3000000000'] , label: '1 tỷ - 3 tỷ' },
    { value:['3000000000','5000000000'], label: '3 tỷ - 5 tỷ' },
    { value:['5000000000','7000000000'], label: '5 tỷ - 7 tỷ' },
    { value:['7000000000','10000000000'], label: '7 tỷ - 10 tỷ' },
    { value:['10000000000','15000000000'], label: '10 tỷ - 15 tỷ' },
    { value:['15000000000','20000000000'], label: '15 tỷ - 20 tỷ' },
    { value:['20000000000','500000000000'], label: 'trên 20 tỷ' },
  ];
  
  const options3 = [
    { value:['1000000','3000000'], label: '1 triệu - 3 triệu' },
    { value:['3000000','5000000'], label: '3 triệu - 5 triệu' },
    { value:['5000000','7000000'], label: '5 triệu - 7 triệu' },
    { value:['7000000','10000000'], label: '7 triệu - 10 triệu' },
    { value:['10000000','20000000'], label: '10 triệu - 20 triệu' },
    { value:['20000000','30000000'], label: '20 triệu - 30 triệu' },
    { value:['30000000','50000000'], label: '30 triệu - 50 triệu' },
    { value:['50000000','500000000'], label: 'trên 50 triệu' },
  ];
  
  
  export function ViewAllfilter({onChange}) {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
      <div className="viewall-filter-one">
        <Select
          placeholder="Hồ Chí Minh"
          defaultValue={selectedOption}
          onChange={onChange}
          options={options}
          className="viewall-filter-one-select"
          classNamePrefix="react-select-viewall"
        />
      </div>
    );
  }
  
  export function ViewAllfilter1({onChange}) {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
      <div className="viewall-filter-two">
        <Select
          placeholder="Loại bất động sản"
          defaultValue={selectedOption}
          onChange={onChange}
          options={options1}
          className="viewall-filter-two-select"
          classNamePrefix="react-select-viewall-two"
        />
      </div>
    );
  }
  
  export function ViewAllfilter2({onChange}) {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
      <div className="viewall-filter-three">
        <Select
          placeholder="Giá mua"
          defaultValue={selectedOption}
          onChange={onChange}
          options={options2}
          className="viewall-filter-three-select"
          classNamePrefix="react-select-viewall-three"
        />
      </div>
    );
  }
  
  export function ViewAllfilter3({onChange}) {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
      <div className="viewall-filter-three">
        <Select
          placeholder="Giá thuê"
          defaultValue={selectedOption}
          onChange={onChange}
          options={options3}
          className="viewall-filter-three-select"
          classNamePrefix="react-select-viewall-three"
        />
      </div>
    );
  }