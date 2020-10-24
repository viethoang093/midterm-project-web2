import React from 'react'
import { Card, Button } from 'antd';
import 'antd/dist/antd.css';
import { formatTime } from '../../services'
import { CopyOutlined, ClockCircleOutlined } from '@ant-design/icons'


const BoardItem = ({ board }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center mt-3">
            <Card title={board.name} bordered={true} style={{ width: 250 }}>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'> <ClockCircleOutlined className='mr-1' />{formatTime(board.createdAt)}</div>
                    <div>2 card</div>
                </div>
                <hr />
                <div className="footer" style={{ marginBottom: '-15px' }}>
                    <Button type="dashed" icon={<CopyOutlined />}>
                        URL
                </Button>
                </div>
            </Card>
        </div>
    );
}

export default BoardItem;