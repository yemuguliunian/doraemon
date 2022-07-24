import { defineConfig } from 'dumi'

export default defineConfig({
    title: 'doraemon',
    description: '百宝箱',
    outputPath: 'dist',
    base: '/doraemon',
    publicPath: '/doraemon/',
    exportStatic: {},
    extraBabelPlugins: [['import', { libraryName: 'antd', style: 'css' }, 'antd']],
})
