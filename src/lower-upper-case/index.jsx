/**
 * inline: true
 */
import React, { useState } from 'react'
import { Space, Input, Button, message } from 'antd'
import copyToClipboard from 'copy-to-clipboard'
import handles from './index'

const { TextArea } = Input

function Com() {
    const [source, setSource] = useState()
    const [target, setTarget] = useState()

    function copy(value) {
        if (value) {
            message.success(`${value} copied`)
            copyToClipboard(value)
        }
    }

    function convert(...actions) {
        let value = source
        actions.forEach(action => {
            value = handles[action](value)
        })
        setTarget(value)
        copy(value)
    }

    function clear() {
        setSource()
        setTarget()
    }

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <TextArea
                rows={6}
                value={source}
                onChange={e => setSource(e.target.value)}
                placeholder="输入需要转换的内容"
            />
            <Space wrap>
                <Button onClick={() => convert('toUpper')}>全大写</Button>
                <Button onClick={() => convert('toLower')}>全小写</Button>
                <Button onClick={() => convert('snakeCase')}>驼峰转下划线</Button>
                <Button onClick={() => convert('snakeCase', 'toUpper')}>驼峰转下划线&全大写</Button>
            </Space>
            <Space wrap>
                <Button type="primary" onClick={() => copy(target)}>
                    复制
                </Button>
                <Button danger ghost onClick={clear}>
                    清空
                </Button>
            </Space>
            <TextArea rows={6} placeholder="转换结果" value={target} />
        </Space>
    )
}

export default Com
