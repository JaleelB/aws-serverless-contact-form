export const getEmailTemplate = (
    date: string,
    title: string,
    content: string,
    email: string
): string => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family:'Open Sans',Helvetica,Arial,sans-serif;
                    margin: 0;
                    padding: 1rem;
                    background-color: #f9f9f9;
                    color: #333;
                }
                main{
                    height: 100vh; 
                    margin: 0 auto;
                    width: 100%;
                    max-width: 600px;
                    padding: 2rem 0;
                }
                .date{
                    text-align: right;
                }
                .email-wrapper {
                    width: 100%;
                    min-height: 50%;
                    background-color: #fff;
                    padding: 40px;
                    box-sizing: border-box;
                    border-top: 3px solid #B9FD7B;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);
                }

                .emoji{
                    font-size: 2.5rem;
                    margin: 0 auto 2rem;
                    width: min-content;
                }
                h1 {
                    font-size: 24px;
                    font-weight: 500;
                    margin: 0 0 20px;
                    color: #000;
                    text-align: center;
                    padding-bottom: 5px;
                }
                p {
                    font-size: 14px;
                    line-height: 1.5;
                    margin: 0 0 10px;
                }
                .date {
                    font-size: 12px;
                    font-weight: bold;
                    color: #666;
                    margin-bottom: 20px;
                }
                .content {
                    margin-bottom: 20px;
                }
                .footer{
                    font-size: 14px;
                    text-align: center;
                    margin: 1rem auto 0;
                    max-width: 450px;
                }

                /* Responsive styles */
                @media screen and (max-width: 600px) {
                    .email-wrapper {
                        padding: 20px;
                    }

                    h1 {
                        font-size: 20px;
                    }

                    p {
                        font-size: 13px;
                    }
                }

            </style>
        </head>
        <body>
            <main>
                <p class="date">${date}</p>
                <div class="email-wrapper">
                    <div class="emoji">👋</div>
                    <h1>${title}</h1>
                    
                    <div class="content">
                        <p>
                            ${content}
                        </p>
                    </div>
                </div>
                <div class="footer">
                    This email was sent to ${email} because you recently request a message on the topic on the usefulness of AI. 
                </div>
            </main>
            
        </body>
        </html>
    `;
}