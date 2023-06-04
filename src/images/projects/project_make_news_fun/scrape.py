from bs4 import BeautifulSoup 
import requests
from selenium import webdriver
import uuid
import json
import time

news = {}
browser = webdriver.Firefox()

def getNews():
    print("fetching the news")
    getHeadlinesFromSite( "https://edition.cnn.com/", "cd__headline-text","cnn") 
    getHeadlinesFromSite( "https://foxnews.com/", "title", "fox")
    createJson()

def getHeadlinesFromSite(url, cssClass, webSiteName):
    page_link = url
    browser.get(page_link)
    page_response = browser.page_source
    page_content = BeautifulSoup(page_response, "html.parser")
    body = page_content.find_all(class_=cssClass)
    print("Assigning all UUID ID's for " + webSiteName)
    for headline in body:
        headline = headline.get_text()
        insertNews(webSiteName, headline)

def insertNews(fromWebsite, headline):
    if fromWebsite not in news:
        news[fromWebsite] = []
    words = []
    for word in headline.split():
        wordObj = {'id': str(uuid.uuid4()), 'word': word}
        words.append(wordObj)
    news[fromWebsite].append(words)
    
def createJson():
    print("creating JSON file")
    with open('news.json', 'w') as outfile:
        json.dump(news, outfile)

def main():
    getNews()
    time.sleep(20)
    print("closing browser")
    browser.quit()
    print("finished")
    
    
main()
