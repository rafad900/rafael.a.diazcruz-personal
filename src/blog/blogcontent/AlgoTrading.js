const algo_trading = {
  "id": "algo-trading-compute-challenge",
  "title": "Navigating the Computational Maze of Algorithmic Trading",
  "slug": "algorithmic-trading-compute-optimization",
  "authors": [
    { "name": "Your Name", "avatar": "https://placehold.co/100x100/aabbcc/ffffff?text=YN" }
  ],
  "img": "https://picsum.photos/800/450?random=2",
  "tag": "Algorithmic Trading, Data Science, High Performance Computing",
  "description": "Exploring the exciting world of algorithmic trading, the challenges of optimizing trading strategies, and the significant compute power required to find winning parameters.",
  "published_date": "2025-07-14T11:05:00Z",
  "content_blocks": [
    {
      "id": "intro-heading",
      "type": "heading",
      "data": {
        "level": 3,
        "text": "How it all started!"
      }
    },
    {
      "id": "intro-paragraph",
      "type": "paragraph",
      "data": {
        "text": "I first got into algorithmic trading in the year 2020 as we were all forced to seclude in our homes for extended periods of time. I had just graduated from my Bachelors and obtained my first job but it wasn't going to start for another couple of months. With the WallStreetBets craze going on, I decided to give it a try!"
      }
    },
    {
      "id": "strategies-heading",
      "type": "heading",
      "data": {
        "level": 5,
        "text": "Life getting in the way"
      }
    },
    {
      "id": "strategies-paragraph",
      "type": "paragraph",
      "data": {
        "text": "Unfortunately, my efforts were short lived as I  was forced to move states and travel quite a bit for my employer and so I wasn't able to make much progress on this front until I began my Master's at UC Davis. There I began to take on it again while having a full time job and having course work. Probably not the best of times to get into this field but I was determined to make it work."
      }
    },
    {
      "id": "sma-code-example",
      "type": "code",
      "data": {
        "language": "python",
        "code": "import pandas as pd\n\ndef calculate_sma(data: pd.Series, window: int) -> pd.Series:\n    \"\"\"Calculates the Simple Moving Average.\"\"\"\n    return data.rolling(window=window).mean()\n\n# Example usage (assuming 'close_prices' is a pandas Series)\n# stock_df['SMA_50'] = calculate_sma(stock_df['close'], 50)\n# stock_df['SMA_200'] = calculate_sma(stock_df['close'], 200)"
      }
    },
    {
      "id": "compute-challenge-heading",
      "type": "heading",
      "data": {
        "level": 3,
        "text": "The Compute Conundrum: Optimizing for Success"
      }
    },
    {
      "id": "compute-challenge-paragraph-5",
      "type": "paragraph",
      "data": {
        "text": "Above is a sample code that calculates the necessary values for a strategy based on moving averages. The basic idea is to buy or sell when the two lines cross each other. One line moves faster than the other which crosses the slower line. This generates the \"signals\" that drive the trading strategy."
      }
    },
    {
      "id": "compute-challenge-paragraph-4",
      "type": "paragraph",
      "data": {
        "text": "There is a problem that I faced early on. That is the need for computing power to find the best combination of parameters that will generate the most profits. Sounds easy enough, but the thing is that there are several combinations that you can test on just a single strategy. Millions or billions depending on the stategy and the level of control."
      }
    },
    {
      "id": "sma-formula-latex",
      "type": "latex",
      "data": {
        "formula": "SMA_n = \\frac{\\sum_{i=1}^{n} P_i}{n}",
        "displayMode": true,
        "caption": "Formula for Simple Moving Average (SMA), where $P_i$ is the price at period $i$ and $n$ is the window length."
      }
    },
    {
      "id": "daily-return-formula-latex",
      "type": "latex",
      "data": {
        "formula": "R_t = \\frac{P_t - P_{t-1}}{P_{t-1}}",
        "displayMode": true,
        "caption": "Formula for Daily Return ($R_t$), where $P_t$ is the price at time $t$."
      }
    },
    {
      "id": "compute-challenge-paragraph-3",
      "type": "paragraph",
      "data": {
        "text": "This iterative process, multiplied by hundreds or thousands of parameter combinations, becomes a significant computational bottleneck. Even with access to GPUs and parallelization techniques, the sheer volume of calculations can quickly overwhelm typical hardware resources. The time it takes to run a comprehensive optimization can stretch from hours to days, making rapid iteration and deep exploration of the parameter space a constant struggle."
      }
    },
    {
      "id": "future-strategies-heading",
      "type": "heading",
      "data": {
        "level": 3,
        "text": "My future efforts: A Path to Higher Profits"
      }
    },
    {
      "id": "future-strategies-paragraph",
      "type": "paragraph",
      "data": {
        "text": "There is still a lot of things I have not looked into that could really boost my efforst. The first thing from my perspective is obtaining more compute power to test all the combinations possible. From there, I still need to build the software infrastructure that will allow me to execute trades on an exchange of my choosing."
      }
    },
    {
      "id": "unique-image-id",
      "type": "image",
      "data": {
        "src": "https://rafad900.github.io/rafael.a.diazcruz-personal/SMALines.png",
        "alt": "Two lines that cross each other",
        "caption": "Hard to see but there are two lines that cross each other. The blue line is the stock price."
      }
    },
    {
      "id": "unique-image-id",
      "type": "image",
      "data": {
        "src": "https://rafad900.github.io/rafael.a.diazcruz-personal/SMACrossOverPNL.png",
        "alt": "Profit and loss graph.",
        "caption": "Profit and loss graph between buy and hold vs SMA Cross Over strategy."
      }
    }
  ]
}

export default algo_trading;