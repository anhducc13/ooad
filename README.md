## Thêm câu hỏi

Có các branch tương ứng với các file câu hỏi json trong thư mục src/

Ai thêm phần nào sẽ qua nhánh đó làm và tạo pull request về master

Định dạng câu hỏi như sau:

```json
{
    "text": "Phát biểu nào là đúng?",
    "numOfRightAnswer": 2,
    "answers": [
        "UML là ngôn ngữ lập mô hình cho bản thiết kế phần mềm",
        "UML là một quy trình phát triển cho các hệ thống phần mềm chuyên sâu",
        "UML là ngôn ngữ phụ thuộc vào quá trình được sử dụng để hiển thị các tạo phẩm phần mềm",
        "UML là ngôn ngữ lập trình trực quan"
    ],
    "image": null
},
```
Mô tả: <br />
text: nội dung câu hỏi <br />
numOfRightAnswer: số lượng câu trả lời đúng (single choice là 1, multi choice > 1, nhập sai web tèo) <br />
answers: các câu trả lời, `(những) câu trả lời đúng xếp ở đầu tiên`, ởi ví dụ trên 2 ý đầu là các câu trả lời đúng <br />
image: hình ảnh (nếu có), cần upload lên đâu đó rồi gán link vào

<br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
