import dotenv from 'dotenv';
dotenv.config();

class HomePage {
  constructor(page) {
    this.page = page;
    this.url = process.env.BASE_URL;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async getTitle() {
    return await this.page.title();
  }
}

export default HomePage;