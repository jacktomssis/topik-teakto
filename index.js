class TopikTeaktoPlatform {
    constructor(platformName) {
      this.platformName = platformName;
      this.topics = [];
      this.users = [];
    }
  
    createTopic(topicTitle, creator) {
      const topic = {
        title: topicTitle,
        creator: creator,
        messages: [],
      };
      this.topics.push(topic);
      console.log(`New topic "${topicTitle}" created by ${creator}.`);
    }
  
    addUser(userName) {
      this.users.push(userName);
      console.log(`${userName} has joined ${this.platformName}.`);
    }
  
    postMessage(topicIndex, userName, message) {
      if (topicIndex < this.topics.length) {
        const topic = this.topics[topicIndex];
        topic.messages.push({ user: userName, message: message });
        console.log(`${userName} posted in the topic "${topic.title}": ${message}`);
      } else {
        console.log('Invalid topic index.');
      }
    }
  
    displayPlatformInfo() {
      console.log(`
        ${this.platformName} Platform Information:
        Topics: ${this.topics.length}
        Users: ${this.users.join(', ')}
      `);
    }
  }
  
  // Example usage
  const topikTeakto = new TopikTeaktoPlatform('Topik-Teakto');
  
  topikTeakto.createTopic('Blockchain Technology', 'Alice');
  topikTeakto.createTopic('Cryptocurrency Trends', 'Bob');
  topikTeakto.addUser('Charlie');
  topikTeakto.postMessage(0, 'Charlie', 'What are the key features of blockchain technology?');
  topikTeakto.displayPlatformInfo();
  